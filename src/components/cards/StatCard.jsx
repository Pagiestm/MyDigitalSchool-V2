export default function StatCard({ number, text }) {
    return (
        <div className="flex flex-col items-center justify-center block p-4 w-1/2 text-laser-lemon">
            <h2 className="font-medium text-3xl">{number}</h2>
            <p className="text-sm">{text}</p>
        </div>
    );
}