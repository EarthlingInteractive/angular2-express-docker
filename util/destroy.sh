#!/usr/bin/env bash

echo "Destroy swarm";
docker-compose -f docker-compose.yml down;
