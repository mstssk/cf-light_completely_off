#!/bin/sh -ux

cd `dirname $0`

GCP_PROJECT_ID=$1
urlLightOn=$2
urlLightToggle=$3

gcloud beta runtime-config configs list --project $GCP_PROJECT_ID
# gcloud beta runtime-config configs create light_completely_off --project $GCP_PROJECT_ID

gcloud beta runtime-config configs variables set urlLightOn "$urlLightOn" --config-name light_completely_off --project $GCP_PROJECT_ID
gcloud beta runtime-config configs variables set urlLightToggle "$urlLightToggle" --config-name light_completely_off --project $GCP_PROJECT_ID

# gcloud beta runtime-config configs variables get-value urlLightOn --config-name light_completely_off --project $GCP_PROJECT_ID
# gcloud beta runtime-config configs variables get-value urlLightToggle --config-name light_completely_off --project $GCP_PROJECT_ID
