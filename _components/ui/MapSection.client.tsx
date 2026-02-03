export default function MapSection({ className = "" }: { className?: string }) {
    return (
        <section className={`${className} h-100 w-full rounded-xl`}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40597.18905069501!2d26.216176955402002!3d50.50953214986569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f0d933236bcad%3A0x7f2e934e70db1fb3!2z0JfQtNC-0LvQsdGD0L3RltCyLCDQoNGW0LLQvdC10L3RgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1suk!2sua!4v1770106229178!5m2!1suk!2sua"
                style={{ border: 0 }}
                height="100%"
                width="100%"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl h-full w-full"
            ></iframe>
        </section>
    );

}
