# Zagle - aktualne ustawienia deployu

Ten plik opisuje dzialajaca konfiguracje po wdrozeniu i naprawie bledu `502`.

## 1) Ustawienia aplikacji (Next.js)

- `next.config.ts`:
  - `output: "standalone"`
  - `basePath: "/zagle"`
  - `assetPrefix: "/zagle"`
- Aplikacja ma byc otwierana pod adresem: `http://<host>/zagle`
- Zasoby lokalne (`rsc`) sa serwowane przez route handler:
  - `src/app/rsc/[...path]/route.ts`
  - poprawna sygnatura dla Next 16: `ctx: RouteContext<"/rsc/[...path]">` + `const params = await ctx.params;`
- Obrazy w kodzie wskazuja na `/zagle/rsc/...`:
  - `src/lib/images.ts`

## 2) Ustawienia Docker (aplikacja)

- `docker-compose.yml`:
  - serwis: `zagle`
  - obraz: `image: ${ZAGLE_IMAGE}`
  - mapowanie portu: `127.0.0.1:3000:3000`
  - restart: `unless-stopped`
- Kontener aplikacji: `zagle-zagle-1`
- W kontenerze aplikacji:
  - `PORT=3000`
  - `HOSTNAME=0.0.0.0`

## 3) Ustawienia NPM (Nginx Proxy Manager)

Kontener NPM:
- nazwa: `npm`
- publikuje: `80`, `81`, `443`

Sieci:
- NPM musi byc podlaczony do:
  - `proxy`
  - `zagle_default`

Proxy Host dla `194.163.189.157`:
- Scheme: `http`
- Forward Hostname/IP: `zagle-zagle-1` (dziala tez `172.20.0.2`)
- Forward Port: `3000`
- `Block Common Exploits`: ON
- `Websockets Support`: ON
- `Custom Locations`: brak (puste)

## 4) Dlaczego byl blad 502

W aktywnym configu NPM byl zly upstream:

- zle: `proxy_pass http://172.17.0.1:3000;`
- poprawnie: `proxy_pass http://zagle-zagle-1:3000;` (lub `http://172.20.0.2:3000;`)

## 5) Szybkie testy diagnostyczne

Na serwerze:

```bash
docker ps --format "table {{.Names}}\t{{.Ports}}"
```

Z kontenera NPM do aplikacji:

```bash
docker exec npm getent hosts zagle-zagle-1
docker exec npm node -e "require('http').get('http://zagle-zagle-1:3000/zagle',r=>console.log(r.statusCode))"
docker exec npm node -e "require('http').get('http://172.20.0.2:3000/zagle',r=>console.log(r.statusCode))"
```

Sprawdzenie aktywnego upstreamu NPM:

```bash
docker exec npm sh -lc "grep -R \"proxy_pass\" -n /data/nginx/proxy_host"
```

## 6) Naprawa upstreamu (awaryjnie z terminala)

```bash
docker exec npm sh -lc "sed -i 's|proxy_pass http://172.17.0.1:3000;|proxy_pass http://zagle-zagle-1:3000;|g' /data/nginx/proxy_host/1.conf && nginx -t && nginx -s reload"
```

Po zmianie:

```bash
curl -I http://127.0.0.1/zagle
```

