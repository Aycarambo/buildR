FROM directus/directus:latest

COPY --chown=1000:1000 directus_database/database.sqlite /data/database.sqlite
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

ENV KEY=1234 \
    SECRET=456 \
    ADMIN_EMAIL=admin@example.com \
    ADMIN_PASSWORD=testpass \
    KEY=255d861b-5ea1-5996-9aa3-922530ec40b1 \
    SECRET=6116487b-cda1-52c2-b5b5-c8022c45e263

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["/bin/sh", "-c", "npx directus bootstrap && npx directus start"]
