
export default class DatatableConfig {
  constructor({ currentPage = 1, pageSize = 10, items = [], totalRecords = 0, loading = false }) {
    this.pageSize = pageSize;
    this.currentPage = currentPage;
    this.totalRecords = totalRecords;
    this.items = items;
    this.loading = loading;
    this.first = ((this.currentPage - 1) * this.pageSize) + 1;
    this.last = Math.min(this.currentPage * this.pageSize, this.totalRecords);
    this.totalPages = Math.trunc((this.totalRecords / this.pageSize) + 0);
  }
}
