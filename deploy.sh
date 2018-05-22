#!/bin/sh -eux

cd `dirname $0`

GCP_PROJECT_ID=$1
gcloud beta functions deploy light_completely_off --trigger-http --project $GCP_PROJECT_ID
