import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('FormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onAddTodo on submit', () => {
    component.todo = 'ABC';

    const spy = jasmine.createSpy();
    component.onAddTodo.subscribe(spy);

    const hostEl: HTMLElement = fixture.nativeElement;
    // const formEl = hostEl.querySelector<HTMLFormElement>('.form-inline');
    const formEl = hostEl.querySelector('form');

    formEl.dispatchEvent(new Event('submit'));

    expect(spy).toHaveBeenCalledWith('ABC');
  });
});
