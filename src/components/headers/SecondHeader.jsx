export default function SecondHeader({children, color}) {
    return (
        <h2 className={`font-sora text-${color} text-lg font-semibold mb-2 uppercase`}>
            {children}
        </h2>
    );
}