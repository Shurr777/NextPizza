'use client'

import React from 'react';
import {Title} from "./title";
import {FilterCheckbox} from "./filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "./range-slider";
import {CheckboxFiltersGroup} from "./checkbox-filters-group";


interface Props {
    className?: string;
    onChange: (value: string[]) => void;
}


export const Filters: React.FC<Props> = ({className}) => {



    return (
        <div className={className}>
            <Title text="Фильтрация" className="mb-5 font-bold" size="sm"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" max="1000" defaultValue="0"/>
                    <Input type="number" placeholder="1000" min="100" max="1000" value="500"/>
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>

                <CheckboxFiltersGroup
                    title="Ингридиенты"
                    className="mt-5"
                    limit={6}
                    defaultItems={[
                        {
                            text: 'Сырный соус',
                            value: '1',
                        },
                        {
                            text: 'Моццарелла',
                            value: '2',
                        },
                        {
                            text: 'Чеснок',
                            value: '3',
                        },
                        {
                            text: 'Солённые огурчики',
                            value: '4',
                        },
                        {
                            text: 'Красный лук',
                            value: '5',
                        },
                        {
                            text: 'Томаты',
                            value: '6',
                        },
                    ]}
                    items={[
                        {
                            text: 'Сырный соус',
                            value: '1',
                        },
                        {
                            text: 'Моццарелла',
                            value: '2',
                        },
                        {
                            text: 'Чеснок',
                            value: '3',
                        },
                        {
                            text: 'Солённые огурчики',
                            value: '4',
                        },
                        {
                            text: 'Красный лук',
                            value: '5',
                        },
                        {
                            text: 'Томаты',
                            value: '6',
                        },
                        {
                            text: 'Сырный соус',
                            value: '1',
                        },
                        {
                            text: 'Моццарелла',
                            value: '2',
                        },
                        {
                            text: 'Чеснок',
                            value: '3',
                        },
                        {
                            text: 'Солённые огурчики',
                            value: '4',
                        },
                        {
                            text: 'Красный лук',
                            value: '5',
                        },
                        {
                            text: 'Томаты',
                            value: '6',
                        },
                    ]}
                    onChange={()=>{}}
                />
            </div>
        </div>
    );
};

