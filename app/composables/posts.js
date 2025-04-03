export const useArticles = async () => {
    const {data: articles} = await useAsyncData('articles', () => queryCollection('articles')
        .orWhere(query => query
            .where('hidden', 'IS NULL')
            .where('hidden','=', false)
        )
        .select('path', 'title', 'image', 'date', 'description')
        .order('date', 'DESC')
        .all());
    return articles;
}