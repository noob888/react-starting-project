// Props forwading using rest property to pass multiple arguments like id, class, etc
// Note: works only for multiple args in one tag
export default function Section({title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}