window.BENCHMARK_DATA = {
  "lastUpdate": 1682794981168,
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
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a31938134082d918b15d511da40997d66971b8f4",
          "message": "fix flaky safe mode reconfig test (#11391)\n\n## Description \r\n\r\nChange the override to take in a start and end epoch instead.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T00:22:08Z",
          "tree_id": "19ee97e10177bbfa267b368955c8f83ec91c2d26",
          "url": "https://github.com/MystenLabs/sui/commit/a31938134082d918b15d511da40997d66971b8f4"
        },
        "date": 1682555510053,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147709915,
            "range": "± 4403907",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 392970,
            "range": "± 65985",
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
          "id": "3c5d52b5e182440760c2fce8a7e16695a08b7cb8",
          "message": "[transaction fuzzer] Add bounds testing within programmable transactions (#11394)",
          "timestamp": "2023-04-26T18:40:39-07:00",
          "tree_id": "8e0e26a64e8030fc872cbb201f5f948414d20e30",
          "url": "https://github.com/MystenLabs/sui/commit/3c5d52b5e182440760c2fce8a7e16695a08b7cb8"
        },
        "date": 1682560245955,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 160704045,
            "range": "± 5033535",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 379366,
            "range": "± 43811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c416d4557e42e8ac16be17e93430a636ac5310e",
          "message": "with_tracing to instrument info or error logs (#11324)\n\n## Description \r\n\r\nWrapper function to help instrument info or error logs. info logs are\r\nstill subject to sampling, but error logs will always log.\r\n\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n```\r\n```\r\n2023-04-25T19:55:34.558917Z ERROR connection{remote_addr=127.0.0.1:63470 conn_id=6}:get_dynamic_field_object{parent_object_id=0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516 name=DynamicFieldName { type_: Address, value: String(\"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\") }}: sui_json_rpc::indexer_api: get_dynamic_field_object failed: Call(Failed(Cannot find dynamic field [DynamicFieldName { type_: Address, value: String(\"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\") }] for object [0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516].))\r\n```\r\n\r\n\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"method\": \"suix_getOwnedObjects\",\r\n    \"params\": [\r\n        \"0xadfb89b000e97a30bd485bffbff80f883096a8a98cdce33641ec924393d8fbe8\",\r\n        {\r\n            \"options\": {\r\n                \"showType\": true,\r\n                \"showOwner\": false,\r\n                \"showPreviousTransaction\": false,\r\n                \"showDisplay\": false,\r\n                \"showContent\": true,\r\n                \"showBcs\": false,\r\n                \"showStorageRebate\": false\r\n            }\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n```\r\n\r\n```\r\n2023-04-25T19:56:01.066520Z  INFO connection{remote_addr=127.0.0.1:63477 conn_id=12}:get_owned_objects{address=0xadfb89b000e97a30bd485bffbff80f883096a8a98cdce33641ec924393d8fbe8 query=Some(SuiObjectResponseQuery { filter: None, options: Some(SuiObjectDataOptions { show_type: true, show_owner: false, show_previous_transaction: false, show_display: false, show_content: true, show_bcs: false, show_storage_rebate: false }) }) cursor=None limit=None}:multi_get_objects{object_ids=[] options=Some(SuiObjectDataOptions { show_type: true, show_owner: false, show_previous_transaction: false, show_display: false, show_content: true, show_bcs: false, show_storage_rebate: false })}: sui_json_rpc::read_api: multi_get_objects\r\n```\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T21:19:49-07:00",
          "tree_id": "4a8f0e00c1e69e1fbfb57b37b7407322af5d8c0f",
          "url": "https://github.com/MystenLabs/sui/commit/9c416d4557e42e8ac16be17e93430a636ac5310e"
        },
        "date": 1682569774762,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148640330,
            "range": "± 4720566",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320377,
            "range": "± 73488",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39b55e8bfd503bf2e46604bb2c0117b97767138a",
          "message": "new DynamicFieldNotFound error (#11356)\n\n## Description \r\nIf a DynamicFieldName is not found on a parent object, return\r\nSuiObjectResponse error response instead of stock RpcResult error\r\nPreviously:\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"error\":{\"code\":-32000,\"message\":\"Cannot find dynamic field [DynamicFieldName { type_: Address, value: String(\\\"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\\\") }] for object [0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398].\"},\"id\":1}%    \r\n```\r\nNow:\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"error\":{\"code\":\"dynamicFieldNotFound\",\"parent_object_id\":\"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\"}},\"id\":1}%  \r\n```\r\n\r\nNote: chose not to include the dynamicFieldName itself as\r\nDynamicFieldName.value is a serde_json object that does not appear to\r\n`#[derive(Hash)]` which is required by `SuiObjectResponseError`. And\r\nit's in the client call anyways.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:14:33-07:00",
          "tree_id": "8f4795d69cc5bad45b8e148adb946312f8730e8c",
          "url": "https://github.com/MystenLabs/sui/commit/39b55e8bfd503bf2e46604bb2c0117b97767138a"
        },
        "date": 1682573122396,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110401512,
            "range": "± 5600324",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 349917,
            "range": "± 26021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e5379b521f20824ca528e18d311d8e63b3af851",
          "message": "[tx fuzzer] add rgp tests (#11325)\n\n## Description \r\n\r\nAdd fuzzing tests that start up an authority state with random reference\r\ngas price values and process transactions.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T07:07:49Z",
          "tree_id": "0009ceb190d31f4a342f26f1b25b5c1b98030f31",
          "url": "https://github.com/MystenLabs/sui/commit/5e5379b521f20824ca528e18d311d8e63b3af851"
        },
        "date": 1682579836736,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146591526,
            "range": "± 4486719",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313839,
            "range": "± 13781",
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
          "id": "081cd51e76f3d930b4147b36cded71b2bf4c0b37",
          "message": "[pruner] revert 9ae7afbf6a20466b23cd7d90a46280d284ef9f2f (#11397)\n\nthis PR:\r\n* reverts\r\nhttps://github.com/MystenLabs/sui/commit/9ae7afbf6a20466b23cd7d90a46280d284ef9f2f\r\n* disables multi_get objects call in environments that do not have\r\nindirect objects",
          "timestamp": "2023-04-27T07:52:04-07:00",
          "tree_id": "8d5384581b87859b728d6b1d44265b32c944405b",
          "url": "https://github.com/MystenLabs/sui/commit/081cd51e76f3d930b4147b36cded71b2bf4c0b37"
        },
        "date": 1682607682153,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109527796,
            "range": "± 6736483",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310634,
            "range": "± 8056",
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
          "id": "524c109514650662ba19f62e304306a758f28048",
          "message": "[pruner] delay first execution (#11415)",
          "timestamp": "2023-04-27T10:19:56-07:00",
          "tree_id": "cd55d039d22cf122a2a608a3327a484a431df727",
          "url": "https://github.com/MystenLabs/sui/commit/524c109514650662ba19f62e304306a758f28048"
        },
        "date": 1682616708527,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145547311,
            "range": "± 6588881",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309316,
            "range": "± 21759",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maria@mystenlabs.com",
            "name": "Maria Siopi",
            "username": "siomari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa6f9faf895b4ad1726d488f03a59588f467f893",
          "message": "Add conversions keytool (#11250)\n\n## Description \r\n\r\nAdd conversions:\r\n-hex<>base64\r\n-base64<>bytearray\r\n-hex<>bytearray\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T20:27:28+03:00",
          "tree_id": "6ad6fd82712c282080f53758a2d45b314741ebd3",
          "url": "https://github.com/MystenLabs/sui/commit/aa6f9faf895b4ad1726d488f03a59588f467f893"
        },
        "date": 1682617043062,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149648337,
            "range": "± 5058403",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 371771,
            "range": "± 47126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76067158+666lcz@users.noreply.github.com",
            "name": "Chris Li",
            "username": "666lcz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "334a7f1e19bbf81548e1a61aaa4728f9afe408a4",
          "message": "[rpc] wrap multi_get_transaction_blocks with spawn async (#11414)\n\n## Description \r\n\r\nLoad testing shows that there's some perf regression in\r\n`multi_get_transaction_blocks` after\r\nhttps://github.com/MystenLabs/sui/pull/10913 because some of the\r\nblocking queries such as computing object/balance changes are not\r\nwrapped in spawn_async. This also impacts the perf for\r\n`query_transaction_blocks` which also uses\r\n`multi_get_transaction_blocks` under the hood.\r\n\r\n## Next steps\r\nAudit rest of the codebase and make sure all blocking calls are wrapped\r\nin spawn_async\r\n\r\n## Test Plan \r\n\r\nTested against loadgen client and observed that performance regression\r\nis gone\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T17:55:14Z",
          "tree_id": "24ee1ff2fc45d6ed127b8b7190f23f14c1936a04",
          "url": "https://github.com/MystenLabs/sui/commit/334a7f1e19bbf81548e1a61aaa4728f9afe408a4"
        },
        "date": 1682618687944,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153694870,
            "range": "± 4779345",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317552,
            "range": "± 32131",
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
          "id": "95463a9ff22da72feb0fc850341966cd39b0cad2",
          "message": "Prune and compact checkpoints before upload (#11343)\n\n## Description \r\n\r\nAs title says, we are enabling a config which allows us to prune objects\r\nand invoke compaction on the objects table before uploading the snapshot\r\nto s3.\r\n## Test Plan \r\n\r\nEnhanced current unit tests.",
          "timestamp": "2023-04-27T20:07:29Z",
          "tree_id": "ab21bb09eeea0e18e4b7ab87da2392d9f3218300",
          "url": "https://github.com/MystenLabs/sui/commit/95463a9ff22da72feb0fc850341966cd39b0cad2"
        },
        "date": 1682626773308,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105725177,
            "range": "± 3717455",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 343045,
            "range": "± 21611",
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
          "id": "f88e450c28ddabe0d0686cb70f6f291d12028430",
          "message": "[TestInfra] Consolidate WalletContext gas code (#11392)\n\nThis PR moves all the gas object read code using wallet context into\r\nWalletContext.",
          "timestamp": "2023-04-27T13:32:58-07:00",
          "tree_id": "395db168b6317d9b85f46a7d52320bf52c3ece7d",
          "url": "https://github.com/MystenLabs/sui/commit/f88e450c28ddabe0d0686cb70f6f291d12028430"
        },
        "date": 1682628164222,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148567786,
            "range": "± 4218436",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319165,
            "range": "± 55819",
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
          "id": "abd46dbf0c6b0aa1c9f3c3fb1bc62bfe3786c8c7",
          "message": "Limit Move identifier length (#11413)\n\n## Description \r\n\r\nLimits lengths of Move identifiers to 128.\r\nBumps protocol config to 9.\r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T21:39:46Z",
          "tree_id": "9d126b6a215f68420106b4a7de22277f24b9b4a5",
          "url": "https://github.com/MystenLabs/sui/commit/abd46dbf0c6b0aa1c9f3c3fb1bc62bfe3786c8c7"
        },
        "date": 1682632244347,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140608310,
            "range": "± 5007916",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318799,
            "range": "± 18980",
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
          "id": "4d394f8f67ca74dd557fdba972c25fab18965ba4",
          "message": "Fix checkpoint store used in db checkpoint handler (#11434)\n\n## Description \r\n\r\nAs title says\r\n## Test Plan \r\n\r\nExisting",
          "timestamp": "2023-04-27T22:38:42Z",
          "tree_id": "abda2fd6f3b4be2b679ec8bf7d61caf44c05bd40",
          "url": "https://github.com/MystenLabs/sui/commit/4d394f8f67ca74dd557fdba972c25fab18965ba4"
        },
        "date": 1682635716600,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146444313,
            "range": "± 4694172",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 365770,
            "range": "± 54763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "118224482+ronny-mysten@users.noreply.github.com",
            "name": "ronny-mysten",
            "username": "ronny-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "081776165193a623895b01c97287a467f51a26ef",
          "message": "Examples for API ref (#11281)\n\n## Description \r\n\r\nExamples for rpc api ref. Resubmitting PR to capture updates made to Sui\r\nrepo since previous submission. A few additional examples added since\r\nthen, too.\r\n\r\n## Test Plan \r\n\r\nLocally\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T17:21:29-06:00",
          "tree_id": "69fb4b699b184027471685da630e1740f31e3a03",
          "url": "https://github.com/MystenLabs/sui/commit/081776165193a623895b01c97287a467f51a26ef"
        },
        "date": 1682638221159,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108171576,
            "range": "± 3332580",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325544,
            "range": "± 24746",
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
          "id": "0aacca3192f9e17016dae4e38171f35e4fa7f215",
          "message": "Split out ExecutionStatus from messages.rs (#11431)\n\nmessages.rs is growing too much. It's time to split it into smaller\r\nfiles.\r\nThere is no functional change but to move ExecutionStatus related types\r\nto a separate fle.",
          "timestamp": "2023-04-27T17:00:59-07:00",
          "tree_id": "b9e9ecb7abc8f29c4c45a568614c9e7826acc4da",
          "url": "https://github.com/MystenLabs/sui/commit/0aacca3192f9e17016dae4e38171f35e4fa7f215"
        },
        "date": 1682640879921,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147584210,
            "range": "± 4691947",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315898,
            "range": "± 18493",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eaed49f03e22c680ee39094392f3147585144801",
          "message": "[move] Ban extraneous module bytes and metadata (#11393)\n\n## Description \r\n\r\n- Ban extraneous module bytes\r\n- Ban metadata\r\n\r\n## Test Plan \r\n\r\n- New tests \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T00:48:07Z",
          "tree_id": "94e33074c23bfe3fbadc5b3b73624ebfb2eba3f3",
          "url": "https://github.com/MystenLabs/sui/commit/eaed49f03e22c680ee39094392f3147585144801"
        },
        "date": 1682643492363,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146370101,
            "range": "± 4566426",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327274,
            "range": "± 17995",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7915de5319955de4f87c908a445c5f4076a98190",
          "message": "[sui-transaction-builder] Remove dependency on sui-adapter (#11163)\n\n## Description\r\n\r\nRemove logic in the transaction builder that relies on the execution\r\nlayer, namely:\r\n\r\n- Type checking move call parameters, which other SDKs do not do, and is\r\ncomplicated by execution versioning.\r\n- Preventing calls to non-entry functions in `Normal` execution mode\r\n(which is not longer a restriction with the introduction of programmable\r\ntransactions).\r\n\r\nThis removes the dependency on `sui-adapter` from `sui-json` and\r\n`sui-sdk`.\r\n\r\n## Test Plan\r\n\r\n```\r\n$ cargo simtest\r\n$ env SUI_SKIP_SIMTESTS=1 cargo nextest run\r\n```\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [x] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n- `unsafe_moveCall` and `unsafe_batchTransaction` now ignore their\r\n`execution_mode` parameter, and always allow calls to non-entry\r\nprogrammable transactions.\r\n- Rust SDK no longer performs type resolution and checks (matching\r\nbehaviour with TypeScript SDK).",
          "timestamp": "2023-04-27T19:13:27-07:00",
          "tree_id": "36ba6e75b5d83fc39c7e4380e3a3ec57e02eb160",
          "url": "https://github.com/MystenLabs/sui/commit/7915de5319955de4f87c908a445c5f4076a98190"
        },
        "date": 1682648590452,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146299831,
            "range": "± 5159403",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 324684,
            "range": "± 20745",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2ef9071d8bda02d624b3892f759e1d297e3007",
          "message": "[kiosk] Adds delist function to kiosk + security patches (#11378)\n\n## Description \r\n\r\nAdds missing `delist` function to the Kiosk.\r\n\r\n## Test Plan \r\n\r\nIncludes tests for the delist function + type checking.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- adds `kiosk::delist` function to remove a listing\r\n- adds `kiosk::has_item_with_type<T>` to check if an item exists and its\r\ntype T\r\n- fixes the issue allowing tx sender to choose arbitrary `T` in some\r\nfunctions",
          "timestamp": "2023-04-28T08:39:31Z",
          "tree_id": "db281d5ecc8a9324205971bd001ae9481b918694",
          "url": "https://github.com/MystenLabs/sui/commit/4d2ef9071d8bda02d624b3892f759e1d297e3007"
        },
        "date": 1682671960453,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150422791,
            "range": "± 5118757",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 579905,
            "range": "± 51214",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "105368040+xydas97@users.noreply.github.com",
            "name": "xydas97",
            "username": "xydas97"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "699c8f7c7382b800af0eff187ddc6831d4d7c229",
          "message": "[Sui-sdk] Expose get_checkpoints method to rust sdk (#11419)\n\n## Description \r\n\r\nExpose get_checkpoints method to rust sdk\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T17:04:44+03:00",
          "tree_id": "970f1ad882a1c1b8384cbf737a747b8cc6e51b9a",
          "url": "https://github.com/MystenLabs/sui/commit/699c8f7c7382b800af0eff187ddc6831d4d7c229"
        },
        "date": 1682691346301,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 104289275,
            "range": "± 8072276",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309017,
            "range": "± 24368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7f2c57e99324790c84ebe165017cd1f20cb05b3",
          "message": "Bump narwhal network's max_idle_timeout. (#11463)",
          "timestamp": "2023-04-28T17:42:51Z",
          "tree_id": "799e01975c199d32d5eb77597eeea7c096de917a",
          "url": "https://github.com/MystenLabs/sui/commit/f7f2c57e99324790c84ebe165017cd1f20cb05b3"
        },
        "date": 1682704350915,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145891584,
            "range": "± 4926197",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337082,
            "range": "± 83111",
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
          "id": "e8916d0ff4dcb08c6278d216ebc1466ceb87f82f",
          "message": "Move advance_to_highest_supported_protocol_version to version 9 to track release branch mishap (#11445)",
          "timestamp": "2023-04-28T11:01:40-07:00",
          "tree_id": "25b9efd05872ee2b7d6c85c2342979074c2157f8",
          "url": "https://github.com/MystenLabs/sui/commit/e8916d0ff4dcb08c6278d216ebc1466ceb87f82f"
        },
        "date": 1682705486282,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149340843,
            "range": "± 4643003",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 382550,
            "range": "± 38343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jonas-lj@users.noreply.github.com",
            "name": "Jonas Lindstrøm",
            "username": "jonas-lj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16d1b6fa6260f0f7d5a4f367ec0c92e6aa54fec6",
          "message": "Optimise ecdsa over secp256r1 (#11410)",
          "timestamp": "2023-04-28T14:29:07-04:00",
          "tree_id": "cd6f6164899f7a1eba34d3863b3e0c4e96d6df63",
          "url": "https://github.com/MystenLabs/sui/commit/16d1b6fa6260f0f7d5a4f367ec0c92e6aa54fec6"
        },
        "date": 1682707166379,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148366220,
            "range": "± 4781278",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 372425,
            "range": "± 33505",
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
          "id": "bd7418c65f9775e8cec08848eb3401613ba612b7",
          "message": "indexer stability: epoch commit fix (#11465)\n\n## Description \r\n\r\n- move epoch commit from tx to obj commit\r\n- move epoch tx count from checkpoint handling to obj\r\n\r\n## Test Plan \r\n\r\nThis has been used to backfill mainnnet data and worked well;\r\nAlso tested locally",
          "timestamp": "2023-04-28T12:28:58-07:00",
          "tree_id": "ff19def84b5532995ad2cbbba2cbaabb6aa99dfd",
          "url": "https://github.com/MystenLabs/sui/commit/bd7418c65f9775e8cec08848eb3401613ba612b7"
        },
        "date": 1682710756764,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156380813,
            "range": "± 5247166",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 478079,
            "range": "± 43798",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "188d24981fb3771798d84fa8606d8dc56430f3fa",
          "message": "[node] adding error handling and also piping length from config (#11337)\n\n## Description \r\n\r\nMoved from constant length to new length allowed in protocol verifier\r\n\r\n## Test Plan \r\n\r\nLocally,\r\n\r\nTODO: check on write\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T15:33:04-04:00",
          "tree_id": "9a0dacdbb716c5b29ffb0e81eb4698791aec4107",
          "url": "https://github.com/MystenLabs/sui/commit/188d24981fb3771798d84fa8606d8dc56430f3fa"
        },
        "date": 1682710984936,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147913326,
            "range": "± 4927591",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315087,
            "range": "± 24990",
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
          "id": "ec34d4b84ba3766650391e6181084d1c762f966b",
          "message": "[bugfix] - do not return balance and object change if local execution failed (#11466)\n\n## Description \r\n\r\ndo not return balance and object change if local execution failed",
          "timestamp": "2023-04-28T12:34:17-07:00",
          "tree_id": "2b4c62b2ed9c8f3dace1fc12600226256813a7e4",
          "url": "https://github.com/MystenLabs/sui/commit/ec34d4b84ba3766650391e6181084d1c762f966b"
        },
        "date": 1682711048840,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145622453,
            "range": "± 5655755",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310623,
            "range": "± 10918",
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
          "id": "e5f6d393d6060cff92e9aa67d8ed3f094a6eb196",
          "message": "add get validators apy endpoint (#11293)\n\n## Description \r\n\r\nAdded a new endpoint `suix_getValidatorsApy` to get the list of APY for\r\nall active validators.\r\nthe APY is calculated using the current staking pool and 30 days staking\r\npool exchange rate\r\n\r\nthis PR also added cache for validator exchange rate, which will be\r\nrepopulated when epoch change, `get_states` method will be using this\r\ncache instead of resolving the rate from move tables to improve the read\r\nperformance.\r\n\r\n## Test Plan \r\n\r\nTested manually on testnet\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"apys\": [\r\n            {\r\n                \"address\": \"0x44b1b319e23495995fc837dafd28fc6af8b645edddff0fc1467f1ad631362c23\",\r\n                \"apy\": 0.03927171044129407\r\n            },\r\n            {\r\n                \"address\": \"0x3d618b03660f4e8b4ec99c52af08a814f5248154937782d22b5a8f2e44ba15fc\",\r\n                \"apy\": 0.03927182250212513\r\n            },\r\n            {\r\n                \"address\": \"0x24e8511a01aa7ab06eb8ce61d6c002ac5b8b7e0fde809554ca3662fb184ce257\",\r\n                \"apy\": 0.03927171891132608\r\n            },\r\n            {\r\n                \"address\": \"0x4ce8d9d329879f3b361c9515f48acc0f91b283a7305f6c9c789b0c8d1ebf43f2\",\r\n                \"apy\": 0.039271936185637735\r\n            },\r\n            {\r\n                \"address\": \"0x4c05f4f76ed81d210e9a29ac0756c7a3129e4b9ecacbbb9fc1579505947630cf\",\r\n                \"apy\": 0.039272011483796776\r\n            },\r\n            {\r\n                \"address\": \"0x6881875df60daf5528d66a62b66dc5710bf06b220fa9266ffdfeeb9cd8d6ed94\",\r\n                \"apy\": 0.039271851914000955\r\n            },\r\n            {\r\n                \"address\": \"0xab4fb3eeaa7b0ab4f91eedab33adf140c6750e60ca5e44b3df82491937d7bab4\",\r\n                \"apy\": 0.039271687290090895\r\n            },\r\n            {\r\n                \"address\": \"0x2079cb58f32c868deb0f4f20f509b7f034c7bea84c964cb1316f77fc987445b8\",\r\n                \"apy\": 0.03927190475122777\r\n            },\r\n            {\r\n                \"address\": \"0xaaec0462f9286f2aa9db25143eaa428cc6527b1ef669772b40b011983837de77\",\r\n                \"apy\": 0.03927179016703497\r\n            },\r\n            {\r\n                \"address\": \"0xf941ae3cbe5645dccc15da8346b533f7f91f202089a5521653c062b2ff10b304\",\r\n                \"apy\": 0.03927192198581797\r\n            },\r\n            {\r\n                \"address\": \"0x2622b55585033f26b0a86b378de1a6284c2dda531e52ef30ea87a8df81f4630a\",\r\n                \"apy\": 0.03927168099244316\r\n            },\r\n            {\r\n                \"address\": \"0x43ff72d09170ab4712d7bf26f0475d7f94f60f7076d5da9ebcfe7dde87faf2a7\",\r\n                \"apy\": 0.039271755979213285\r\n            },\r\n            {\r\n                \"address\": \"0x9062fc51d91056246dc31f2b818a4ddb113a044ec22c8dd0674616bbe56f7192\",\r\n                \"apy\": 0.039271682672775476\r\n            },\r\n...\r\n```",
          "timestamp": "2023-04-28T12:33:56-07:00",
          "tree_id": "415cfb91e80a65356aed00f8e59c527700d21191",
          "url": "https://github.com/MystenLabs/sui/commit/e5f6d393d6060cff92e9aa67d8ed3f094a6eb196"
        },
        "date": 1682711055218,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150986019,
            "range": "± 4523398",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 328390,
            "range": "± 23221",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6fd7126051771231c74ebe70f18c255fafa583",
          "message": "Refactor checkpoint contents download flow in state sync (#11433)\n\n## Description \r\n\r\n- Adds tx concurrency limit to complement checkpoint count concurrency\r\nlimit.\r\n- Continuously starts new `GetCheckpointContents` requests up to the\r\nlimit instead of doing this in chunked batches.\r\n\r\n## Test Plan \r\n\r\nUnit tests",
          "timestamp": "2023-04-28T20:36:06Z",
          "tree_id": "f058386f1e71627fe0c9ba77ccfc6b5dc84b957a",
          "url": "https://github.com/MystenLabs/sui/commit/9d6fd7126051771231c74ebe70f18c255fafa583"
        },
        "date": 1682714675302,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102226602,
            "range": "± 3078774",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305211,
            "range": "± 9771",
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
          "id": "452f3c3358612acdbac50967d1fba83ec11dfb01",
          "message": "Filter empty log files during snapshot upload (#11470)\n\n## Description \r\n\r\nRocksDB leaves empty .log files after compaction which fails during\r\nupload to S3 with errors like:\r\n```\r\n Generic S3 error: Error performing put request epoch_0/store/perpetual/000059.log: response error \\\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<Error><Code>MissingContentLength</Code><Message>You must provide the Content-Length HTTP header.</Message><RequestId>PHNPR5VQNTY0GW4Y</RequestId><HostId>D08UaQcJIVUVKFwpo3MrwLAYYqHWNM1FQxHSZfcNiCwkU0cTN0PPN+x+2ot6g1Q+hQ+cuVIsrTw=</HostId></Error>\\\r\n```\r\nAdding a filter for such files, as they are also unused during restore.\r\nAlso updated the deletion of old checkpoints to directly invoke delete\r\non the directory vs doing it file by file earlier by using object store\r\ndelete functionality.\r\n\r\n## Test Plan \r\n\r\nVerified with a restore.",
          "timestamp": "2023-04-28T13:49:09-07:00",
          "tree_id": "e2f55d6d494bc34dd4aecb3d361f80dba01921bd",
          "url": "https://github.com/MystenLabs/sui/commit/452f3c3358612acdbac50967d1fba83ec11dfb01"
        },
        "date": 1682715548311,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141213950,
            "range": "± 5974533",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 375056,
            "range": "± 58551",
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
          "id": "750655cac733de21d95afee01fc33f35ce85c4ec",
          "message": "[rpc] - improve get_states performance  (#11334)\n\nuse multi get instead of using get object read in a loop to reduce\r\nget_stakes latency.\r\nalso added extra metrics",
          "timestamp": "2023-04-28T14:04:49-07:00",
          "tree_id": "71d7b2cc5f0cfb882f406d043c17742e93d81f49",
          "url": "https://github.com/MystenLabs/sui/commit/750655cac733de21d95afee01fc33f35ce85c4ec"
        },
        "date": 1682716474483,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142201257,
            "range": "± 4978235",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 475702,
            "range": "± 82411",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8b5ad9aaecc3c4b30a060ec5e00bdad9ba75a93",
          "message": "doc: Add page for signatures and crypto agility (#11347)\n\n## Description \r\n\r\nadd more docs. i find the signature requirement is hard to find (the\r\noffline signing page is more of a practical and concrete example) so i\r\ncreated a new page for sui-signatures. it fits well to discuss crypto\r\nagility as well.\r\n\r\n## Test Plan \r\n\r\nn/a\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T15:02:38-07:00",
          "tree_id": "9293432ce6a413a26f4296f95970c286d16610f3",
          "url": "https://github.com/MystenLabs/sui/commit/f8b5ad9aaecc3c4b30a060ec5e00bdad9ba75a93"
        },
        "date": 1682720020454,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102278689,
            "range": "± 5733882",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308588,
            "range": "± 17346",
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
          "id": "deb8d58f5faa2a745e086c04699d97a47c08f62e",
          "message": "do not fail the request if objects are pruned for object and balance change (#11476)\n\n## Description \r\n\r\nas titled.\r\n\r\nTested on testnet:\r\n\r\nrequest\r\n```\r\n{\r\n  \"jsonrpc\": \"2.0\",\r\n  \"id\": 1,\r\n  \"method\": \"sui_getTransactionBlock\",\r\n  \"params\": [\"Cgww1sn7XViCPSdDcAPmVcARueWuexJ8af8zD842Ff43\", {\"showBalanceChanges\": true, \"showObjectChanges\":true}]\r\n}\r\n```\r\n\r\nresponse:\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"digest\": \"Cgww1sn7XViCPSdDcAPmVcARueWuexJ8af8zD842Ff43\",\r\n        \"timestampMs\": \"1679936400000\",\r\n        \"checkpoint\": \"0\",\r\n        \"errors\": [\r\n            \"Cannot retrieve balance changes: Error checking transaction input objects: ObjectNotFound { object_id: 0x0000000000000000000000000000000000000000000000000000000000000002, version: Some(SequenceNumber(1)) }\",\r\n            \"Cannot retrieve object changes: Error checking transaction input objects: ObjectNotFound { object_id: 0x0000000000000000000000000000000000000000000000000000000000000002, version: Some(SequenceNumber(1)) }\"\r\n        ]\r\n    },\r\n    \"id\": 1\r\n}\r\n```",
          "timestamp": "2023-04-28T15:18:24-07:00",
          "tree_id": "9aeb2b1a2f2a2758dbb52d8e4cfafa90f15c1c00",
          "url": "https://github.com/MystenLabs/sui/commit/deb8d58f5faa2a745e086c04699d97a47c08f62e"
        },
        "date": 1682720873200,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141035582,
            "range": "± 5170530",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311619,
            "range": "± 20269",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "313c3701bbb07e8aeb5b027b96a68bd6073de662",
          "message": "[framework] Deprecate CurrencyCreated event (#11480)\n\n## Description \r\n\r\nDeprecates CurrencyCreated event - it's no longer emitted.\r\n\r\n## Test Plan \r\n\r\nTests pass, change is minor.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- coin::CurrencyCreated event is no longer emitted, CoinMetadata can be\r\nused instead\r\n\r\n---------\r\n\r\nCo-authored-by: Brandon Williams <brandon@mystenlabs.com>",
          "timestamp": "2023-04-28T22:49:42Z",
          "tree_id": "c4d530ae9116ab429c369866d6c498c2cbcd2e6a",
          "url": "https://github.com/MystenLabs/sui/commit/313c3701bbb07e8aeb5b027b96a68bd6073de662"
        },
        "date": 1682722776872,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147089113,
            "range": "± 5410396",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 333271,
            "range": "± 35462",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "411fd70107ae3f997105351abdd2fcb1e25799d0",
          "message": "[move][test] Fix test code counting (#11488)\n\n## Description \r\n\r\n- Add counting to test only function\r\n- Hardening in the future if it is used outside of tests\r\n\r\n## Test Plan \r\n\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T17:08:56-07:00",
          "tree_id": "320ab8ff098397c1ac7caf9c1c7a05ef07467c9e",
          "url": "https://github.com/MystenLabs/sui/commit/411fd70107ae3f997105351abdd2fcb1e25799d0"
        },
        "date": 1682727534905,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105394424,
            "range": "± 6426267",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 296096,
            "range": "± 26773",
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
          "id": "c5fbb89d0a53f6f18a42e6ad0f195154142a7bf6",
          "message": "HandleCertificateV2 (#11423)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Lu Zhang <8418040+longbowlu@users.noreply.github.com>",
          "timestamp": "2023-04-28T17:16:22-07:00",
          "tree_id": "c0e6cd147eb38e8085fb30c2d4a12a7abc696745",
          "url": "https://github.com/MystenLabs/sui/commit/c5fbb89d0a53f6f18a42e6ad0f195154142a7bf6"
        },
        "date": 1682727983976,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139326094,
            "range": "± 4419917",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305959,
            "range": "± 28853",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e038e62caaabcac4b1f1bd3d64730e0f14c95dd1",
          "message": "Sui v1.0.0 version change (#11468)\n\n## Description \r\nSui v1.0.0 version change\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-04-29T00:33:31Z",
          "tree_id": "d460d71dba3ba129d2a2fdb9958922300a7761b1",
          "url": "https://github.com/MystenLabs/sui/commit/e038e62caaabcac4b1f1bd3d64730e0f14c95dd1"
        },
        "date": 1682728881865,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107593737,
            "range": "± 7778001",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 346541,
            "range": "± 22176",
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
          "id": "8440912aa60c6965ba07266a81ea756a8ad3e635",
          "message": "Fix race in db checkpoints (#11490)\n\n## Description \r\n\r\nAs title says, we can otherwise run into this race which throws an\r\nerror:\r\n\r\nT0 -> Take perpetual snapshot\r\nT1 -> Insert effects\r\nT2 -> Insert checkpoints\r\nT3 -> Take checkpoints snapshot\r\n\r\nLonger term plan is to prune extra effects and checkpoints which are not\r\na part of the current epoch from the snapshot.\r\n \r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T01:20:02Z",
          "tree_id": "ada6cf7bda8e9bf235791c05508d1eecc0fadb1c",
          "url": "https://github.com/MystenLabs/sui/commit/8440912aa60c6965ba07266a81ea756a8ad3e635"
        },
        "date": 1682731830155,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108284974,
            "range": "± 13167948",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 348016,
            "range": "± 25794",
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
          "id": "09b2081498366df936abae26eea4b2d5cafb2788",
          "message": "Split out effects from messages.rs (#11479)\n\nmessages.rs is growing too much. Split out TransactionEffects and\r\nrelated structures.\r\nThere are a few more that I would want to split out latter.\r\n\r\n---------\r\n\r\nCo-authored-by: ade <ade@mystenlabs.com>",
          "timestamp": "2023-04-29T04:50:26Z",
          "tree_id": "2670c1bc6e3402c8e1900dd90518d69e92772317",
          "url": "https://github.com/MystenLabs/sui/commit/09b2081498366df936abae26eea4b2d5cafb2788"
        },
        "date": 1682744304520,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105453049,
            "range": "± 4582723",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308793,
            "range": "± 7911",
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
          "id": "9bbbc81537813e335ed0dbba16b2f5e86ff14e40",
          "message": "[CheckpointExecutor] Better logging for missing tx effects (#11482)\n\n## Description \r\n\r\nAs in title \r\n\r\n## Test Plan \r\n\r\nSimtests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T07:56:07-07:00",
          "tree_id": "85cf55a95a6eaec2f3cf35f32e0bb8a8df544f45",
          "url": "https://github.com/MystenLabs/sui/commit/9bbbc81537813e335ed0dbba16b2f5e86ff14e40"
        },
        "date": 1682780767058,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153455519,
            "range": "± 4791611",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308757,
            "range": "± 75583",
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
          "id": "d05b26c372f90b42776554e3046e3f7431cc3582",
          "message": "Add certificate deny config (#11462)\n\nAdd ability for validators to immediately execute a cert to execution\r\nerror without actually executing it, based on either a config or a\r\nhardcoded list.",
          "timestamp": "2023-04-29T18:37:58Z",
          "tree_id": "0f93e0cf5c9c137c100d053156b1263aebbb5bdb",
          "url": "https://github.com/MystenLabs/sui/commit/d05b26c372f90b42776554e3046e3f7431cc3582"
        },
        "date": 1682794257600,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 157839269,
            "range": "± 5029797",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325724,
            "range": "± 64050",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e78f315e178fccc40bdf7761c808cb712d6e0aba",
          "message": "[transactional tests] Add support for PT Publish and Upgrade commands  (#11206)\n\n## Description \r\n\r\n- Factored out some shared publishing/upgrading logic\r\n- Added a \"staging\" command for publish to compile a package but use it\r\nin a later command\r\n- Added a set-address command that sets the address via a value or an\r\nobject ID\r\n- Added support for `Publish` and `Upgrade` commands\r\n\r\n## Test Plan \r\n\r\n- Example tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T11:54:39-07:00",
          "tree_id": "dacd5cb55af4b640f936aedad382b1779f14fb5c",
          "url": "https://github.com/MystenLabs/sui/commit/e78f315e178fccc40bdf7761c808cb712d6e0aba"
        },
        "date": 1682794976442,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105781783,
            "range": "± 3912643",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306951,
            "range": "± 22804",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}