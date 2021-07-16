const urls = ['https://www.unilever.com.my/news/press-releases/', 'https://www.unilever.com.my/news/', 'https://www.unilever.com.my/', 'https://www.unilever.com.my/news/2021/how-we-will-help-build-a-more-equitable-and-inclusive-society/'];

describe('visual', () => {
    urls.forEach(url => {
    it(`connect to percy - ${url}`, () => {
        cy.visit(url)
        cy.percySnapshot(url);
    })
    })
})