import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: IState;
    orders?: IOrder[];
    orderTotal?: number;
    latitude?: number;
    longitude?: number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    productName: string;
    itemCost: number;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IApiResponse {
    status: boolean;
    error?: string;
}
