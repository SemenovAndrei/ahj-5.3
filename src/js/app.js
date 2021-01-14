import Form from './Form';
import Elements from './Elements';
import DateCalendar from './DateCalendar';

const form = new Form();

const elements = new Elements(form);

const dateCalendar = new DateCalendar(elements);
dateCalendar.init();
