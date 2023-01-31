#!/bin/sh

mkdir -p /directus/database
cp /data/database.sqlite /directus/database

exec "$@"