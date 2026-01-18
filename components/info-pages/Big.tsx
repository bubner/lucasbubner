export default function Big({ children, scale = 4 }: { children: React.ReactNode; scale?: number }) {
    return <span className={`text-${scale}xl font-bold`}>{children}</span>;
}
