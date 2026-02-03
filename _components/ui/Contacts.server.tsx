import { TelegramIcon, InstagramIcon, ViberIcon } from "../ui/SVG/MessengerIcons"

export default function Contacts({className = ""}:{className?: string}) {
    return (
        <div className={`${className} flex flex-col gap-4 text-sm `}>
            <h3 className="font-semibold uppercase  text-lg">
                Контактна інформація
            </h3>
            
            <div className="flex flex-col gap-2">
                <a 
                    href="tel:+380686314453" 
                    className="font-medium hover:text-yellow-900  transition-colors"
                >
                    +380 68 631 44 53
                </a>
                
                <a 
                    href="mailto:pandachinatea@gmail.com" 
                    className="font-medium hover:text-yellow-900 transition-colors"
                >
                    pandachinatea@gmail.com
                </a>
            </div>

            {/* Messengers Section */}
            <div className="space-y-2">
                <h4 className="font-medium text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                    Написати нам
                </h4>
                <div className="flex gap-4">
                    {/* Telegram Direct Message (resolve domain) */}
                    <a 
                        href="https://t.me/+380686314453" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label="Write to us on Telegram"
                    >
                        <TelegramIcon />
                    </a>

                    {/* Viber Direct Message (viber://chat?number=...) */}
                    {/* Note: The %2B replaces the '+' symbol for URL encoding */}
                    <a 
                        href="viber://chat?number=%2B380686314453" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label="Write to us on Viber"
                    >
                        <ViberIcon />
                    </a>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-2 border-b border-gray-200 dark:border-zinc-800 pb-6">
                <h4 className="font-medium text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                    Ми в соцмережах
                </h4>
                <div className="flex gap-4">
                    <a 
                        href="https://t.me/pandachinatea" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label="Join our Telegram Channel"
                    >
                        <TelegramIcon />
                    </a>
                    <a 
                        href="https://www.instagram.com/panda_chinatea?igsh=ZWs1OHBnZjljZ252" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label="Follow us on Instagram"
                    >
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}
