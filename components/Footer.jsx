export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-4 mt-8 bg-[#006400] text-white border-t border-green-700 dark:border-green-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-white text-sm">
                    © {currentYear} Home Cleaning Service. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
