export function PaginationParams(location: any) {
  const searchParams = new URLSearchParams(location?.search);
  return {
    page: searchParams.get("page") || "",
    per_page: searchParams.get("per_page") || "",
  };
}
