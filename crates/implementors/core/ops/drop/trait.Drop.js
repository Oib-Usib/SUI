(function() {var implementors = {
"mysten_common":[["impl&lt;'a, K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_common/sync/notify_read/struct.Registration.html\" title=\"struct mysten_common::sync::notify_read::Registration\">Registration</a>&lt;'a, K, V&gt;"]],
"mysten_metrics":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/struct.MonitoredScopeGuard.html\" title=\"struct mysten_metrics::MonitoredScopeGuard\">MonitoredScopeGuard</a>"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Permit.html\" title=\"struct mysten_metrics::metered_channel::Permit\">Permit</a>&lt;'a, T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/struct.GaugeGuard.html\" title=\"struct mysten_metrics::GaugeGuard\">GaugeGuard</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/histogram/struct.HistogramTimerGuard.html\" title=\"struct mysten_metrics::histogram::HistogramTimerGuard\">HistogramTimerGuard</a>&lt;'a&gt;"]],
"narwhal_network":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"narwhal_network/struct.CancelOnDropHandler.html\" title=\"struct narwhal_network::CancelOnDropHandler\">CancelOnDropHandler</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"narwhal_network/metrics/struct.MetricsResponseHandler.html\" title=\"struct narwhal_network::metrics::MetricsResponseHandler\">MetricsResponseHandler</a>"]],
"sui_protocol_config":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_protocol_config/struct.OverrideGuard.html\" title=\"struct sui_protocol_config::OverrideGuard\">OverrideGuard</a>"]],
"sui_storage":[["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, L: <a class=\"trait\" href=\"sui_storage/mutex_table/trait.Lock.html\" title=\"trait sui_storage::mutex_table::Lock\">Lock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_storage/mutex_table/struct.LockTable.html\" title=\"struct sui_storage::mutex_table::LockTable\">LockTable</a>&lt;K, L&gt;"]],
"sui_swarm":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_swarm/memory/struct.Swarm.html\" title=\"struct sui_swarm::memory::Swarm\">Swarm</a>"]],
"typed_store":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"enum\" href=\"typed_store/rocks/enum.RocksDB.html\" title=\"enum typed_store::rocks::RocksDB\">RocksDB</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/metrics/struct.RocksDBPerfContext.html\" title=\"struct typed_store::metrics::RocksDBPerfContext\">RocksDBPerfContext</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()