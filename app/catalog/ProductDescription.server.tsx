import { TeaDetails } from "../types";

export default async function ProductDesctiption({ data }: { data: unknown }) {
    if (!data) return null;

    const specs = data as TeaDetails;

    return (
        <div className="bg-stone-50 dark:bg-gray-700 rounded-xl p-6 ">
            <h3 className="text-lg font-serif font-bold text-coffee mb-4">Деталі</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                    <dt className="text-gray-300">Країна походження</dt>
                    <dd className="font-medium text-coffee-text">{specs.origin}</dd>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                    <dt className="text-gray-300">Інгредієнти</dt>
                    <dd className="font-medium text-coffee-text">{specs.ingredients}</dd>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                    <dt className="text-gray-300">Вага(Нетто)</dt>
                    <dd className="font-medium text-coffee-text">{specs.weight}г</dd>
                </div>
                {specs.quantity > 1 && (
                    < div className="flex justify-between border-b border-stone-200 pb-2" >
                        <dt className="text-gray-300">Кількість</dt>
                        <dd className="font-medium text-coffee-text">{specs.quantity} шт </dd>
                    </div>
                )}
                {specs.dimensions && (
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                        <dt className="text-gray-300">Розміри(Довжина х Ширина)</dt>
                        <dd className="font-medium text-coffee-text">{specs.dimensions.length}x{specs.dimensions.width}</dd>
                    </div>
                )}
                <div className="flex justify-between border-b border-stone-200 pb-2">
                    <dt className="text-gray-300">Час заварювання</dt>
                    <dd className="font-medium text-coffee-text">{specs.steepTime} хв</dd>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                    <dt className="text-gray-300">Температура заварювання</dt>
                    <dd className="font-medium text-coffee-text">{specs.steepTemperature} &deg;C</dd>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                    <dt className="text-gray-300">Вміст кофеїну</dt>
                    <dd className="font-medium text-coffee-text">{specs.caffeine}</dd>
                </div>
            </dl >
        </div >
    )

}
