<a href="https://github-com.translate.goog/LAION-AI/Open-Assistant/blob/main/inference/README.md?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp">![Translate](https://img.shields.io/badge/Translate-blue)</a>

# OpenAssistant Inference

Preliminary implementation of the inference engine for OpenAssistant. This is
strictly for local development, although you might find limited success for your
self-hosting OA plan. There is no warranty that this will not change in the
future — in fact, expect it to change.

## Development Variant 1 (docker compose)

The services of the inference stack are prefixed with "inference-" in the
[unified compose descriptor](../docker-compose.yaml). <br/> Prior to building
those, please ensure that you have Docker's new
[BuildKit](https://docs.docker.com/build/buildkit/) backend enabled. See the
[FAQ](https://projects.laion.ai/Open-Assistant/docs/faq#enable-dockers-buildkit-backend)
for more info.

To build the services, run:

```shell
docker compose --profile inference build
```

> **Note:** You might need to compose with the `ci` profile at least once prior
> to this in order to set up everything properly and not encounter errors like
```
[+] Running 2/0
 ✘ inference-redis Error                                                                                                                                                                         0.0s 
 ✘ inference-db Error                                                                                                                                                                            0.0s 
Error response from daemon: Get "https://registry-1.docker.io/v2/": dial tcp: lookup registry-1.docker.io on [::1]:53: read udp [::1]:51400->[::1]:53: read: connection refused
```

Spin up the stack:

```shell
docker compose --profile inference up -d
```

Tail the logs:

```shell
# cd /root/of/this/repository
docker compose logs -f    \
    inference-server      \
    inference-worker
```

> **Note:** The compose file contains the bind mounts enabling you to develop on
> the modules of the inference stack, and the `oasst-shared` package, without
> rebuilding.

> **Note:** You can change the model by editing variable `MODEL_CONFIG_NAME` in
> the `docker-compose.yaml` file. Valid model names can be found at
> https://huggingface.co/OpenAssistant .

> **Note:** You can spin up any number of workers by adjusting the number of
> replicas of the `inference-worker` service (in the `docker-compose.yaml` file)
> to your liking.

> **Note:** Please wait for the `open-assistant-inference-worker` services to
> finish downloading models before continuing to the next step.

Spin up the text-client, and start chatting:

```shell
# cd /root/of/this/repository
cd inference/text-client
pip3 install --user -r requirements.txt
PYTHONPATH=$PWD/../../oasst-shared python3 __main__.py
# You'll soon see a `User:` prompt, where you can type your prompts.
```

Run the text client and start chatting:

```bash
cd text-client
pip install -r requirements.txt
python __main__.py
# You'll soon see a `User:` prompt, where you can type your prompts.
```

## Distributed Testing

We run distributed load tests using the
[`locust`](https://github.com/locustio/locust) Python package.

```bash
pip install locust
cd tests/locust
locust
```

Navigate to http://0.0.0.0:8089/ to view the locust UI.

## API Docs

To update the api docs, once the inference server is running run below command
to download the inference openapi json into the relevant folder under `/docs`:

```bash
wget localhost:8000/openapi.json -O docs/docs/api/inference-openapi.json
```

Then make a PR to have the updated docs merged.
