import { DataTable } from './Table';
import { Head } from './Head';
import { Counter } from './Counter';
import { Body } from './Body';
import { SimpleActionsCell } from './SimpleActionsCell';
import { Pagination } from './Pagination';

const GroupComponent = DataTable;
GroupComponent.Head = Head;
GroupComponent.Body = Body;
GroupComponent.SimpleActionsCell = SimpleActionsCell;
GroupComponent.Counter = Counter;
GroupComponent.Pagination = Pagination;

export { GroupComponent as DataTable };
