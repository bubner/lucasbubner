export default function Big({ children, scale = 4 }: { children: React.ReactNode; scale?: number }) {
    // note: for patching tailwind compiler
    //      text-5xl text-6xl
    return <span className={`text-${scale}xl font-bold`}>{children}</span>;
}
