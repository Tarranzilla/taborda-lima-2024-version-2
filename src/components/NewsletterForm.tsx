import { useSimpleTranslation } from "@/international/use_translation";

const NewsletterForm = () => {
    const t = useSimpleTranslation();

    return (
        <form
            action="https://app.us8.list-manage.com/subscribe/post?u=20f4e8a86cd864aa5a8e6b0d3&amp;id=6436e1ee13&amp;f_id=0042d3e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate newsletter-form"
            target="_self"
            noValidate
        >
            <label htmlFor="mce-EMAIL">Email</label>
            <input
                type="email"
                name="EMAIL"
                placeholder="example@example.com"
                className="required email newsletter-form-input"
                id="mce-EMAIL"
                required
            />

            {/* Hidden input for bot protection */}
            <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                {/* Hidden input for bot protection */}
                <input type="text" name="b_20f4e8a86cd864aa5a8e6b0d3_6436e1ee13" tabIndex={-1} />
            </div>

            <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="newsletter-form-button"
                value={t.common.signNewsletterSubscribeText}
            />
        </form>
    );
};

export default NewsletterForm;
