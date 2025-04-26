export const useReports = async () => {
    const {data: reports} = await useAsyncData('reports', () => queryCollection('reports')
        .orWhere(query => query
            .where('hidden', 'IS NULL')
            .where('hidden','=', false)
        )
        .select('path', 'title', 'image', 'date', 'description', 'align')
        .order('date', 'DESC')
        .all());
    return reports.value;
}
export const useGroups = async () => {
    const {data: groups} = await useAsyncData('groups', () => queryCollection('groups')
        .orWhere(query => query
            .where('hidden', 'IS NULL')
            .where('hidden','=', false)
        )
        .select('path', 'title', 'image', 'date', 'rawbody', 'description', 'align')
        .order('title', 'ASC')
        .all());
    // return groups;
    return groups.value.map(group => {
        return {...group, rawbody: '', description: group.rawbody
                .replace(/\\n/g, ' ')
                .replace(/> /g, ' ')
                .replace(/---.*---/, ' ')
                .slice(0, 1400)
                .replace(/\.(?=[^.]*$).*/, "...")
        }
    });
}
