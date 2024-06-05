export default function FirstHeader({children, color}) {
    return (
        <h1 className={`font-sora text-${color} font-semibold text-2xl mb-4`}>{children}</h1>
    );
}