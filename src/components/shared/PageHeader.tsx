interface PageHeaderProps {
    title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
    return (
        <section className="page-header">
            <h1 className="color-white">{title}</h1>
        </section>
    );
}
