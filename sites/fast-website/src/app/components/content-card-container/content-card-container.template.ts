import { html, when, repeat } from "@microsoft/fast-element";
import { ContentCardContainer } from "./content-card-container";
import { ContentCard } from "../content-card";

export const ContentCardContainerTemplate = html<ContentCardContainer>` <div
    class="section-component"
>
    ${when(
        x => x.framework,
        html<ContentCardContainer>`
            ${repeat(
                x => x.frameworkCardList,
                html`<fast-content-card divider="true">
                    <h3>${x => x.header}</h3>
                    <p slot="body">${x => x.body}</p>
                    <span slot="compatibility"
                        ><img
                            src=${x => x.compatibilityImageSrc}
                            alt=${x => x.compatibilityImageAlt}
                        />
                        ${x => x.compatibilityText}</span
                    >
                    <fast-anchor
                        slot="action"
                        appearance="lightweight"
                        href=${x => x.actionLink}
                        >${x => x.actionText}</fast-anchor
                    >
                </fast-content-card>`
            )}
        `
    )}
    ${when(
        x => x.community,
        html<ContentCardContainer>`
            ${repeat(
                x => x.communityCardList,
                html`<fast-content-card>
                    <div slot="icon">
                        <img src=${x => x.iconSrc} alt=${x => x.iconAlt} />
                    </div>
                    <h3>${x => x.header}</h3>
                    <p slot="body">${x => x.body}</p>
                    <fast-anchor
                        slot="action"
                        appearance="lightweight"
                        href=${x => x.actionLink}
                        >${x => x.actionText}</fast-anchor
                    >
                </fast-content-card>`
            )}
        `
    )}
</div>`;