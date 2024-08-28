export function getApiURL(): string {
  if (process.env.BUILD_TYPE === "clientProd") return "http://localhost:1340/";
  if (process.env.BUILD_TYPE === "uat") return "http://localhost:1340/";
  if (process.env.BUILD_TYPE === "dev") return "http://localhost:1340/";
  if (process.env.BUILD_TYPE === "local") return "http://localhost:1340/";
  return "http://localhost:1340/";
}
