
export default class DatatableConfig {
  constructor({ actualPage = 1, pageSize = 10, items = [], totalRecords = 0, loading = false }) {
    this.pageSize = pageSize;
    this.actualPage = actualPage;
    this.totalRecords = totalRecords;
    this.items = items;
    this.loading = loading;
    this.first = ((this.actualPage - 1) * this.pageSize) + 1;
    this.last = Math.min(this.actualPage * this.pageSize, this.totalRecords);
    this.totalPages = Math.trunc((this.totalRecords / this.pageSize) + 0);
  }
}
