REMOTE="edge@192.168.1.3"
podman build . --file="./Dockerfile-frontend" -t "oci.icbx.duckdns.org/tgc-frontend"
podman build . --file="./Dockerfile-backend"  -t "oci.icbx.duckdns.org/tgc-backend"
podman push "oci.icbx.duckdns.org/tgc-frontend"
podman push "oci.icbx.duckdns.org/tgc-backend"
ssh ${REMOTE} 'podman stop tgc-frontend tgc-backend'
ssh ${REMOTE} 'podman rm tgc-frontend tgc-backend'
ssh ${REMOTE} 'podman pull "oci.icbx.duckdns.org/tgc-frontend:latest"'
ssh ${REMOTE} 'podman pull "oci.icbx.duckdns.org/tgc-backend:latest"'
ssh ${REMOTE} 'podman run -d -p 5173:5173 --name tgc-frontend oci.icbx.duckdns.org/tgc-frontend'
ssh ${REMOTE} 'podman run -d -p 3001:3000 --name tgc-backend oci.icbx.duckdns.org/tgc-backend'
