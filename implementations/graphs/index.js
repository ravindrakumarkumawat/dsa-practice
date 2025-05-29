// Feature	                 Floyd-Warshall	                  Dijkstra (using PQ)	                Bellman-Ford
// Problem Type	             All-Pairs Shortest Path (APSP)	  Single Source Shortest Path (SSSP)	Single Source Shortest Path (SSSP)
// Time Complexity	         O(V^3)	                          O((V + E) log V) (with PQ/heap)	    O(V * E)
// Space Complexity	         O(V^2)	                          O(V) (distance array)	              O(V) (distance array)
// Handles Negative Weights? ✅ Yes	                         ❌ No	                               ✅ Yes
// Detects Negative Cycles?	 ❌ No	                           ❌ No	                               ✅ Yes
// Graph Type	               Dense or complete graphs	        Sparse graphs	                      Works for all, but slower on dense
// Typical Use Case	         Network routing, APSP problems|  Maps, navigation, weighted SSSP|	  Arbitrage detection, graphs with -ve weights

// 🔍 Key Insights
// 🔸 Floyd-Warshall
// ✔ Simple, brute-force style, great for small graphs.
// ✔ Best for dense graphs and when all pairs of shortest paths are needed.
// ✔ Cannot detect negative cycles — it assumes the user will interpret invalid paths if needed.

// 🔸 Dijkstra
// ✔ Best for non-negative edge weights.
// ✔ Highly efficient for sparse graphs using a min-heap (priority queue).
// ✔ Can be run V times to get all-pairs shortest path, but not optimal compared to Floyd-Warshall in that case.

// 🔸 Bellman-Ford
// ✔ Slower than Dijkstra but works with negative edge weights.
// ✔ Only algorithm here that can detect negative cycles.
// ✔ Not ideal for dense graphs due to O(V * E) time.

// ✅ Which One to Use When?
// ✔ Use Dijkstra for fast SSSP on positive-weight sparse graphs.
// ✔ Use Bellman-Ford if the graph has negative weights or needs negative cycle detection.
// ✔ Use Floyd-Warshall when you need shortest paths between all pairs of nodes, especially on small or dense graphs.