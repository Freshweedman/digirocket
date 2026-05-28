export interface SeasonalHeadline {
    line1: string;
    beforeHighlight: string;
    highlight: string;
    line3: string;
    bannerText: string;
}

export const getSeasonalContent = (): SeasonalHeadline => {
    const now = new Date();
    const month = now.getMonth(); // 0-indexed
    const day = now.getDate();

    // Default Headline
    let content: SeasonalHeadline = {
        line1: "DigiRocket: Aumente suas",
        beforeHighlight: "vendas em ",
        highlight: "48 horas",
        line3: "com um site estratégico",
        bannerText: "DESCONTO DE LANÇAMENTO ATIVADO"
    };

    // Carnival (approx late Feb)
    if (month === 1 && day >= 1 && day <= 28) {
        content = {
            line1: "Oferta de Carnaval DigiRocket:",
            beforeHighlight: "Escale seu faturamento em ",
            highlight: "tempo recorde",
            line3: "com sua estrutura profissional",
            bannerText: "CONDIÇÕES ESPECIAIS DE CARNAVAL"
        };
    }

    // Easter (Usually April)
    if (month === 3 && day >= 1 && day <= 15) {
        content = {
            line1: "Especial de Páscoa DigiRocket:",
            beforeHighlight: "Multiplique seus resultados em ",
            highlight: "48 horas",
            line3: "com um site de alta conversão",
            bannerText: "OFERTA DE PÁSCOA DISPONÍVEL"
        };
    }

    // Black Friday (November)
    if (month === 10 && day >= 10) {
        content = {
            line1: "Black Friday DigiRocket:",
            beforeHighlight: "A maior conversão em ",
            highlight: "48 horas",
            line3: "com o menor preço do ano",
            bannerText: "MAIOR DESCONTO DO ANO ATIVADO"
        };
    }

    // Christmas (December)
    if (month === 11 && day >= 1 && day <= 26) {
        content = {
            line1: "Natal DigiRocket:",
            beforeHighlight: "Comece o ano novo vendendo em ",
            highlight: "48 horas",
            line3: "com seu novo site premium",
            bannerText: "PRESENTE DE NATAL DIGIROCKET"
        };
    }

    return content;
};
