import styles from './DataTable.module.css';

export default function DataTable(props) {
    console.log(props);

    return (
        <table class={styles.table}>
            <thead>
            <tr>
                <For each={props.header}>
                    {(headerRow) => {
                        console.log(headerRow)
                        return (
                            <th class={styles.th}>
                                {headerRow.text}
                            </th>
                        )
                    }}
                </For>
            </tr>
            </thead>
            <tbody>
            <For each={props.data}>
                {(dataRow) => {
                    return (
                        <tr>
                            <For each={(Object.values(dataRow))}>
                                {(column) => {
                                    return (
                                        <td class={styles.td}>
                                            {column}
                                        </td>
                                    )
                                }}
                            </For>
                        </tr>
                    )
                }}
            </For>
            </tbody>
        </table>
    )
}
