import Contacts from "@/_components/ui/Contacts.server";
import MapSection from "@/_components/ui/MapSection.client";

export default function ContactsPage() {
    return (
        <div className="mt-32 space-y-10">
            <h2 className="font-semibold text-3xl">Контакти</h2>
            <div className="flex flex-row justify-between gap-20 flex-wrap lg:flex-nowrap items-center ">
                <MapSection />
                <Contacts />
            </div>
        </div>
    );
}
