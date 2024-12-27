import {Container, Title, TopBar, Filters} from "@/components/shared";
import {ProductsGroupList} from "@/components/shared/products-group-list";


export default function Home() {
    return <>

        <Container className="mt-10">
            <Title text="Все пиццы" size="lg" className="font-extrabold"/>
        </Container>

        <TopBar/>

        <Container className="pb-14 mt-10">
            <div className="flex gap-[80px]">
                {/*Aside Filters*/}
                <div className="w-[250px]">
                    <Filters />
                </div>
                {/*Goods list*/}
                <div className="flex-1">
                    <div className="flex flex-col gap-16">
                        <ProductsGroupList
                            title="Пиццы"
                            items={[
                                {
                                    id: 1,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 6,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 7,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 8,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 9,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 10,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 11,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                            ]}
                            categoryId={0}
                        />
                        <ProductsGroupList
                            title="Комбо"
                            items={[
                                {
                                    id: 12,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 13,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 14,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 15,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 16,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 17,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 18,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 19,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 20,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 21,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 22,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                            ]}
                            categoryId={1}
                        />
                        <ProductsGroupList
                            title="Закуски"
                            items={[
                                {
                                    id: 12,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 13,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 14,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 15,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 16,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 17,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 18,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 19,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 20,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 21,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 22,
                                    name: "Чизбургер-пицца",
                                    imageUrl: "https://php.ninjapizza.com.ua/images/news/italy_news_m.webp?ver=v1.0.7",
                                    price: 550,
                                    items: [{price: 550}]
                                },
                            ]}
                            categoryId={2}
                        />
                    </div>
                </div>
            </div>
        </Container>
    </>;
}

/*
<ProductCard
    id={0}
    name="Чизбургер-пицца"
    price={550}
    imageUrl="https://img.postershop.me/14925/23c4e34c-6a08-460f-b5cf-07a6ad651690_image.jpeg"
/>*/
