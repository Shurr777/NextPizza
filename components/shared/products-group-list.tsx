'use client'
import React from 'react';
import {useIntersection} from "react-use";
import {Title} from "./title";
import {cn} from "@/lib/utils";
import {ProductCard} from "./product-card";
import {useCategoryStore} from "@/store/category";


interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}


export const ProductsGroupList: React.FC<Props> = (
    {
        title,
        items,
        listClassName,
        categoryId,
        className
    }
) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = React.useRef(null);

    /*работающий вариант*/
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {setActiveCategoryId(categoryId)}
            },
            {threshold: 0}
        );

        const target = intersectionRef.current;
        if (target) {observer.observe(target)}

        return () => {
            if (target) {observer.unobserve(target)}
        };
    }, [categoryId, setActiveCategoryId, intersectionRef]);


    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};