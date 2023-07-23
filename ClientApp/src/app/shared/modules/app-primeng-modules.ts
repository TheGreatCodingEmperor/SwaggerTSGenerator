import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule, Header, Footer } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import { PanelMenuModule } from 'primeng/panelmenu';
import {PaginatorModule} from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ConfirmPopupModule} from 'primeng/confirmpopup';

export const APP_PRIMENG_MODULES = [
	SharedModule,
	TableModule,
	DialogModule,
	ConfirmDialogModule,
	DropdownModule,
	MenubarModule,
	ButtonModule,
	ListboxModule,
	RadioButtonModule,
	PanelModule,
	AccordionModule,
	CalendarModule,
	TabViewModule,
	FocusTrapModule,
	CheckboxModule,
	TreeTableModule,
	TreeModule,
	PanelMenuModule,
	PaginatorModule,
	InputTextModule,
	ToastModule,
	ConfirmPopupModule
];
