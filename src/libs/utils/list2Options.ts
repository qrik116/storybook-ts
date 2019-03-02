export default function list2Options<T>(list: T[], labelKey = 'name', valueKey = '_id', convertLabel?: (label: string, item: T) => string) {
    if (!list) return [];

    return list.map(listItem => {
        let label = String(listItem[labelKey]);
        const value = String(listItem[valueKey]);

        if (convertLabel) {
            label = convertLabel(label, listItem);
        }

        return { ...listItem, label, value };
    });
}
