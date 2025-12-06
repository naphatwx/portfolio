const SectionHeader = ({ number, title }: { number: number | string; title: string }) => (
    <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-teal-400 font-mono text-xl">{number}.</span> {title}
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
    </div>
);

export default SectionHeader