window.BENCHMARK_DATA = {
  "lastUpdate": 1682550615292,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "6c921a0cc0f86f82c114cfd21b5b24afa67f07e0",
          "message": "Fix release build",
          "timestamp": "2023-04-25T13:42:31-07:00",
          "tree_id": "e1deae07393a28388c87f4863aa4a2b1a94ba5ac",
          "url": "https://github.com/MystenLabs/sui/commit/6c921a0cc0f86f82c114cfd21b5b24afa67f07e0"
        },
        "date": 1682456001641,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143989111,
            "range": "± 4682497",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325357,
            "range": "± 27396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "571e4ca89892cd8bfed2324e56161c0e6f9ea01c",
          "message": "Write full_checkpoint_content and checkpoint_content atomically (#11330)\n\n## Description \r\n\r\nfixes a race condition which can lead to a crash.\r\n\r\n## Test Plan \r\n\r\ncargo simtest\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nfixes a race condition which can lead to a crash.",
          "timestamp": "2023-04-25T21:38:55Z",
          "tree_id": "d4bc1cdb9cefae653d5df2564ebfd7f949a7cf70",
          "url": "https://github.com/MystenLabs/sui/commit/571e4ca89892cd8bfed2324e56161c0e6f9ea01c"
        },
        "date": 1682459298456,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144386936,
            "range": "± 5085723",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 364996,
            "range": "± 79768",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b52e54d98319b754deac442c17f29d97e02515c9",
          "message": "[execution_driver] Avoid dispatching thread when permit is available immediately (#11269)\n\nUnder high load we see that execution queue has a lot of certificates,\r\nwhile execution tasks are not fully utilized. It is possible that we are\r\nmaxing out on execution dispatch task throughput, this change avoids it\r\nby spawning tasks directly when possible",
          "timestamp": "2023-04-25T22:10:09Z",
          "tree_id": "bcfbb7802e03f88c4106310cc7498e1ec5d8ab71",
          "url": "https://github.com/MystenLabs/sui/commit/b52e54d98319b754deac442c17f29d97e02515c9"
        },
        "date": 1682461357910,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148372077,
            "range": "± 4740664",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338701,
            "range": "± 41589",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37632af5a1d95d1932dfbe3275abaea312cee468",
          "message": "[sui-node] Stop and wait sui node runtimes on SIGINT (#11323)\n\nThis change makes sure we stop all sui node runtimes upon receiving\r\nSIGINT. This is needed to make sure rocks db databases are properly\r\nclosed before existing sui node",
          "timestamp": "2023-04-25T22:40:41Z",
          "tree_id": "b1327e54cdcfafec802ce7a17f500a298f367d8a",
          "url": "https://github.com/MystenLabs/sui/commit/37632af5a1d95d1932dfbe3275abaea312cee468"
        },
        "date": 1682463031785,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150324602,
            "range": "± 5002036",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308570,
            "range": "± 22250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b52e5db66c774030b05384bbe47d4e17d8b6f0c",
          "message": "[sui-node] Capture SIGTERM as well as SIGINT (#11335)\n\nThis PR listens for SIGTERM in addition to SIGINT. This is needed so tha\r\nwe can properly stop and wait background RocksDB threads, to avoid\r\nRocksDB corruption when run inside supervisor (like docker, systemd,\r\netc).\r\n\r\nSee also: https://github.com/MystenLabs/sui/pull/11323",
          "timestamp": "2023-04-25T23:11:41Z",
          "tree_id": "6de11587d3523ef4bcddb5141aeb8838bc724b79",
          "url": "https://github.com/MystenLabs/sui/commit/1b52e5db66c774030b05384bbe47d4e17d8b6f0c"
        },
        "date": 1682464886124,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156611120,
            "range": "± 6245688",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 382511,
            "range": "± 39454",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "514246ccdcae845ee8e81ac1640cb1c096ffc1fd",
          "message": "Re-enable snapshot tests",
          "timestamp": "2023-04-25T16:15:06-07:00",
          "tree_id": "42fb4918491299b72b09ee638b268925d36f4d3f",
          "url": "https://github.com/MystenLabs/sui/commit/514246ccdcae845ee8e81ac1640cb1c096ffc1fd"
        },
        "date": 1682465095788,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144531284,
            "range": "± 5244749",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307620,
            "range": "± 32442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "630f446c48719c44357f472203acd180f596bb40",
          "message": "Concurrent replay and Epoch replay support (#11272)\n\n## Description \r\n\r\nSetting the stage for higher speed replays and replaying batch from FN\r\nlocal state.\r\nAdded support for replaying checkpoints concurrently.\r\nAdded support for replaying whole epochs.\r\nSimplified code.\r\n\r\n## Test Plan \r\n\r\nManual testing\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-25T19:48:54-04:00",
          "tree_id": "082dd7f83a8b0ee20d486ee4eaca149c20771cef",
          "url": "https://github.com/MystenLabs/sui/commit/630f446c48719c44357f472203acd180f596bb40"
        },
        "date": 1682467223735,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145900883,
            "range": "± 5338099",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 331179,
            "range": "± 90792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe6ae8484d2df34f7a3b94f3f17ac83deb52fa64",
          "message": "Verify accumulator behavior in sui transactional tests (#11205)\n\nUnfortunately, the transactional tests don't use AuthorityStore, so we\r\nhave to duplicate some logic here, but I think this is well worth it for\r\nthe increased coverage.",
          "timestamp": "2023-04-25T20:41:30-07:00",
          "tree_id": "0dec68d93c43a0a835869d647a919dde2272c9c0",
          "url": "https://github.com/MystenLabs/sui/commit/fe6ae8484d2df34f7a3b94f3f17ac83deb52fa64"
        },
        "date": 1682481245512,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150811391,
            "range": "± 5056657",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307561,
            "range": "± 16415",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6429ee94d16af23aa6a92d2dd3a4f5607288f38",
          "message": "[fix] fixing failing randomized tests (#11331)\n\n## Description \r\n\r\nThis PR is fixing an issue on the behaviour of\r\n`this_cert_parents_with_slow_nodes` which is used in randomized tests -\r\nand in other consensus unit tests as well. The method is picking the\r\nparents of a certificate supporting some failure modes (slow nodes). So\r\nbasically , it does pick a subset of the given parents when slow nodes\r\nexist. However, it does not verifying that the parents honour the `2f +\r\n1` requirement by stake. This is now fixed.\r\n\r\nNow the randomized tests [should not\r\nfail](https://github.com/MystenLabs/sui/actions/runs/4793242232) anymore\r\n\r\n## Test Plan \r\n\r\nExisting randomized_tests should not fail.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T09:32:10-07:00",
          "tree_id": "b55d7e1f378d7476645406ef27deca6d652507ff",
          "url": "https://github.com/MystenLabs/sui/commit/d6429ee94d16af23aa6a92d2dd3a4f5607288f38"
        },
        "date": 1682527534734,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152928711,
            "range": "± 4747697",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 345162,
            "range": "± 52445",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c9f2eb767841ac6248dee0275b74b71f0bb452c",
          "message": "Sui surfer (#11268)\n\nThis PR adds a sui-surfer tool that:\r\n1. It starts a network locally\r\n2. Publishes a package to the network. I wrote a package that contains a\r\nbunch of object related building block entry functions. This is what it\r\npublishes. But we could publish any number of packages to the network.\r\n3. It starts 20 (configurable) independent account threads. Each thread\r\nmanages its gas and owned objects. All threads share an immutable/shared\r\nobject pool (each will contribute to it when new objects are generated).\r\n3. Each thread crawl all entry functions in the network in a random\r\norder, and for each function argument, it attempts to see if it could\r\nmatch an object in the pool, and if so use them. For non-object\r\nprimitive arguments it just generates a random value for it.\r\n4. Uses a strategy pattern, which means that one can plug in a different\r\npattern to decide what functions to call during surfing.",
          "timestamp": "2023-04-26T10:04:16-07:00",
          "tree_id": "59e8ed1919697c915fb0e6695b3fd4b5150161f1",
          "url": "https://github.com/MystenLabs/sui/commit/1c9f2eb767841ac6248dee0275b74b71f0bb452c"
        },
        "date": 1682529269409,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152050152,
            "range": "± 4661490",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338786,
            "range": "± 48482",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb28ddd604e4c252b5e7ebc54c4249f3c352d472",
          "message": "[pruner] max transactions in batch (#11348)\n\nreturn back pruner limiting by maximum transactions in a batch",
          "timestamp": "2023-04-26T17:31:46Z",
          "tree_id": "0910c6be6ea2ba00235845151dc9fc24799cabcd",
          "url": "https://github.com/MystenLabs/sui/commit/bb28ddd604e4c252b5e7ebc54c4249f3c352d472"
        },
        "date": 1682530918176,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149315182,
            "range": "± 8213538",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313006,
            "range": "± 21584",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "877a3544fdb8a46ac47df81dd8a860d972155323",
          "message": "Start tracking skipped keys during iteration (#11329)\n\n## Description \r\n\r\nRocksDB can tell us the number of tombstones it had to skip during an\r\niteration. A high number of skipped keys is a cause of concern for\r\nperformance and probably requires compaction.\r\n \r\n## Test Plan \r\n\r\nExisting tests",
          "timestamp": "2023-04-26T10:56:15-07:00",
          "tree_id": "4cd92f53db683d451213b24f6ffbc57c25b40b7d",
          "url": "https://github.com/MystenLabs/sui/commit/877a3544fdb8a46ac47df81dd8a860d972155323"
        },
        "date": 1682532368344,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145792703,
            "range": "± 4747049",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308194,
            "range": "± 8036",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "564007c0676aa0da80922480314976a04b656eb2",
          "message": "Add more logs to Narwhal worker startup (#11365)\n\n## Description \r\n\r\nWe have observed validators crashing on restart, because Narwhal worker\r\ndid not finished starting up in 30s. Adding a bit more logs to help\r\nlocate the root cause.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T11:05:51-07:00",
          "tree_id": "214e97bbb02c709997cf4a7821294c5b354102f3",
          "url": "https://github.com/MystenLabs/sui/commit/564007c0676aa0da80922480314976a04b656eb2"
        },
        "date": 1682532969980,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147859664,
            "range": "± 6604319",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320789,
            "range": "± 23326",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca19d3594c7cb8decca1f781df60267221b72cdf",
          "message": "[mysten-common] Introduce AsyncOnceCell (#11366)\n\nThis is somewhat similar to tokio::sync::watch, see doc for\r\n`AsyncOnceCell` for differences.",
          "timestamp": "2023-04-26T11:33:05-07:00",
          "tree_id": "965e6906248281a46e0cf36550a94c0aa0a1d990",
          "url": "https://github.com/MystenLabs/sui/commit/ca19d3594c7cb8decca1f781df60267221b72cdf"
        },
        "date": 1682534570795,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144016538,
            "range": "± 4749673",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314344,
            "range": "± 25391",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec85b4a46b4a9c74155aef18ffd99dd4c0bc3cfe",
          "message": "[transaction fuzzer] Fuzz with valid type tags (#11339)\n\nAdds a fuzzer generating random valid type tags, one that uses valid\r\ntype tags but an invalid number of type arguments, and another that\r\ngenerates almost wholly-correct typetags but possibly with some invalid\r\ntype tags.",
          "timestamp": "2023-04-26T11:41:52-07:00",
          "tree_id": "f70e41b60ebcdb50320f936038c1a24376c8514d",
          "url": "https://github.com/MystenLabs/sui/commit/ec85b4a46b4a9c74155aef18ffd99dd4c0bc3cfe"
        },
        "date": 1682535135361,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155310929,
            "range": "± 4434362",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 384307,
            "range": "± 67550",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "879310599dc5733dc296f28458b9170e5d0f451a",
          "message": "[metrics] Measure HistogramReporter::report (#11368)\n\nWe now have quite a few usages of precise histogram (and adding more).\r\nMake sense to keep an eye on how much time we spend on calculations.",
          "timestamp": "2023-04-26T19:03:29Z",
          "tree_id": "316089d70cc28ad7f83ba520a50813f2cba866cb",
          "url": "https://github.com/MystenLabs/sui/commit/879310599dc5733dc296f28458b9170e5d0f451a"
        },
        "date": 1682536458460,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153788193,
            "range": "± 6726579",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316058,
            "range": "± 17532",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dce15b59d28e3882accc3660c6d7976261218be",
          "message": "[package upgrades] change upgrade criteria for struct type params (#11369)",
          "timestamp": "2023-04-26T20:39:18Z",
          "tree_id": "8f3123f283eeb649bb3d67df606a85be58fbb4a6",
          "url": "https://github.com/MystenLabs/sui/commit/1dce15b59d28e3882accc3660c6d7976261218be"
        },
        "date": 1682542113475,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109054976,
            "range": "± 4225688",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 303540,
            "range": "± 17432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff3b6bcb85d43421ad98f4827926d788169ffa81",
          "message": "use mystem histogram for some metrics (#11367)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T13:49:20-07:00",
          "tree_id": "b6a44df6828514ca7de3d0b60a003683f0a9aa99",
          "url": "https://github.com/MystenLabs/sui/commit/ff3b6bcb85d43421ad98f4827926d788169ffa81"
        },
        "date": 1682542737335,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146510769,
            "range": "± 4927605",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305978,
            "range": "± 98059",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e65acce8da236743426c1ece029ffa4667a9a4f",
          "message": "indexer stability: fix package population (#11338)\n\n## Description \r\n\r\nAfter the split, `package` data is actually only available when objects\r\nare fetched, thus we need to index package together with objects rather\r\nthan tx.\r\n\r\n## Test Plan \r\n\r\ntested locally and make sure packages can be populated properly\r\nIn production, I will \r\n```\r\nTRUNCATE objects;\r\n```\r\nand then run with a binary with this fix, it will start backfilling for\r\nboth objects and packages.",
          "timestamp": "2023-04-26T14:01:04-07:00",
          "tree_id": "66d5fb052136c7af016627f732969d68a230e41b",
          "url": "https://github.com/MystenLabs/sui/commit/9e65acce8da236743426c1ece029ffa4667a9a4f"
        },
        "date": 1682543464838,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146651198,
            "range": "± 5158120",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311922,
            "range": "± 13450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c23e8d55c56692319fef39c4cdd6ee6c6ac0dcd",
          "message": "pass in tokio runtime and handle drop correctly (#11357)",
          "timestamp": "2023-04-26T14:07:50-07:00",
          "tree_id": "6c20894844023d9cbab9d48e74193f3b3f7ddd84",
          "url": "https://github.com/MystenLabs/sui/commit/9c23e8d55c56692319fef39c4cdd6ee6c6ac0dcd"
        },
        "date": 1682543873524,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150444607,
            "range": "± 5853057",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312600,
            "range": "± 21187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b586653b88bc54c9befc4ff3f1db03f57f83335",
          "message": "log rpc error code (#11377)\n\n## Description \r\n\r\nTo reduce cardinality.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T14:21:33-07:00",
          "tree_id": "fb930d8a7b00227ebf854cb479df351d4a09afb7",
          "url": "https://github.com/MystenLabs/sui/commit/6b586653b88bc54c9befc4ff3f1db03f57f83335"
        },
        "date": 1682544686926,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147251675,
            "range": "± 4575482",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319838,
            "range": "± 20560",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5be6d99f1a17cb67a86db87b7426096850128f8",
          "message": "add network identifier and send to telemetry (#11346)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:07:17Z",
          "tree_id": "dd1bad739a24cc3b2b68a840ec26be95add0a6c2",
          "url": "https://github.com/MystenLabs/sui/commit/f5be6d99f1a17cb67a86db87b7426096850128f8"
        },
        "date": 1682547406320,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147035924,
            "range": "± 4208168",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327649,
            "range": "± 88511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53a427908a26c4ea309d14cc20b92781d6068abe",
          "message": "Upgrade Rust docker image version (#11387)\n\n## Description \r\n\r\nDocker image version was not updated.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:18:48Z",
          "tree_id": "09c067135847cbbbe44e0e68c6f2432f1ebe4b0c",
          "url": "https://github.com/MystenLabs/sui/commit/53a427908a26c4ea309d14cc20b92781d6068abe"
        },
        "date": 1682548141702,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148792216,
            "range": "± 4620663",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311885,
            "range": "± 16930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c037734e417a3269ef2d94f2e05582b89d8b853",
          "message": "rpc: add ref gas price to epoch (#11388)\n\n## Description \r\n\r\nPer request from FE team, add gas price field to Epoch data rpc type\r\n\r\n## Test Plan \r\n\r\nlocal run to make sure that rpc call of get_epochs will return gas price\r\nas well.\r\n```\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"id\": 1,\r\n    \"method\": \"suix_getEpochs\",\r\n    \"params\": []\r\n}' | jq\r\n...\r\n        \"epochTotalTransactions\": \"0\",\r\n        \"firstCheckpointId\": \"9770\",\r\n        \"epochStartTimestamp\": \"1682528442321\",\r\n        \"endOfEpochInfo\": null,\r\n        \"referenceGasPrice\": null\r\n```",
          "timestamp": "2023-04-26T15:49:33-07:00",
          "tree_id": "e328f28be5f885b34f86f1789086e8ef8e4031a7",
          "url": "https://github.com/MystenLabs/sui/commit/8c037734e417a3269ef2d94f2e05582b89d8b853"
        },
        "date": 1682549869008,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105961133,
            "range": "± 4592442",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 304140,
            "range": "± 32331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90a1c044b8e1da767e4cea449556738a936dcc94",
          "message": "indexer stability: re-enable move call population (#11384)\n\n## Description \r\n\r\nmove calls are still used by Explorer move call metrics\r\n\r\n## Test Plan \r\n\r\nTest locally and make sure that only move calls can be populated while\r\nothers are not.",
          "timestamp": "2023-04-26T15:49:53-07:00",
          "tree_id": "28af6fbcf4950ecdebe125309b4ce7655c1a8f0e",
          "url": "https://github.com/MystenLabs/sui/commit/90a1c044b8e1da767e4cea449556738a936dcc94"
        },
        "date": 1682549972636,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153335854,
            "range": "± 5084349",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337444,
            "range": "± 41998",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f648f0bb22828b92761387a65d2296b9ad0242c",
          "message": "Shut down the sim node when SuiNodeHandle is dropped.  (#11383)\n\nFixes memory leak in multi-iteration tests\r\n\r\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:51:01Z",
          "tree_id": "54d201dbd17780e85ac6f050853dce6c3aed3419",
          "url": "https://github.com/MystenLabs/sui/commit/8f648f0bb22828b92761387a65d2296b9ad0242c"
        },
        "date": 1682550034298,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149240404,
            "range": "± 5135984",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307511,
            "range": "± 10763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05f0b9d72c7547154fe41d252958b23728f0359f",
          "message": "Log running consistency checks (#11385)\n\n## Description \r\n\r\n## Test Plan \r\n\r\n👀 + 🧪 \r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T16:00:07-07:00",
          "tree_id": "188218f56d39c55179a5481a93246ff2f062e87e",
          "url": "https://github.com/MystenLabs/sui/commit/05f0b9d72c7547154fe41d252958b23728f0359f"
        },
        "date": 1682550612280,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155459909,
            "range": "± 4791859",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 378793,
            "range": "± 74069",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}