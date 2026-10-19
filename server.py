#!/usr/bin/env python3
"""건축공학 기회보드 로컬 웹 서버."""

from __future__ import annotations

import json
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
HOST = "127.0.0.1"
PORT = 8000
DATA_FILE = ROOT / "data.json"
HIDDEN = {
    "/server.py",
    "/start.bat",
    "/.gitignore",
    "/.git",
}


class BoardHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = urlparse(self.path).path.rstrip("/") or "/"

        if path == "/api/board":
            self._send_json(self._board_payload())
            return

        if path == "/api/health":
            self._send_json({"ok": True, "server": "arch-eng-board"})
            return

        if path in HIDDEN or path.startswith("/.git"):
            self.send_error(404, "Not Found")
            return

        super().do_GET()

    def _board_payload(self):
        with DATA_FILE.open(encoding="utf-8") as file:
            return json.load(file)

    def _send_json(self, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")


def main():
    if not DATA_FILE.exists():
        raise SystemExit("data.json 이 없습니다. 서버를 이 폴더에서 실행하세요.")

    server = ThreadingHTTPServer((HOST, PORT), BoardHandler)
    url = f"http://{HOST}:{PORT}/"
    print("건축공학 기회보드 로컬 서버")
    print(f"주소: {url}")
    print("종료하려면 Ctrl+C")
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n서버를 종료합니다.")
        server.server_close()


if __name__ == "__main__":
    main()
