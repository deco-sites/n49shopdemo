export interface Props {
    codeElfsight?: string;
}

function InstagramElfsight({ codeElfsight }: Props) {
    if (!codeElfsight) {
        return null;
    }

    return (
        <section class="bg-base-100">
            <div className="xl:container xl:mx-auto mx-5 md:mx-10 py-10 md:py-24">
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                <div className={`elfsight-app-${codeElfsight}`} data-elfsight-app-lazy></div>
            </div>
        </section>
    );
}

export default InstagramElfsight;
