Start up script:
`nano /usr/local/bin/startup-script.sh`

```bash
#!/bin/bash
echo "Starting magic mirror..." >> ~/startup.log
export DISPLAY=:0
xhost +local:docker
cd ~/particle-magic-mirror || exit 1
~/bin/particle app run >> ~/app.log 2>&1
echo "Started magic mirror project!" >> ~/startup.log
```

Make it executable:
`sudo chmod +x /usr/local/bin/startup-script.sh`

Create the service:
`sudo nano /etc/systemd/system/startup.service`

Paste the following:
```bash
[Unit]
Description=Run my startup script after network is ready 
After=network-online.target
Wants=network-online.target

[Service]
Type=simple 
ExecStart=/usr/local/bin/startup-script.sh
User=eric
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Enable & start the service:
```bash
sudo systemctl daemon-reexec
sudo systemctl enable startup.service
sudo systemctl start startup.service
```
