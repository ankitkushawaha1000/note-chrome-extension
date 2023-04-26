import styles from './styles'
import Controls from './Controls'
import { useState } from 'react'

export default function TitleBar({ title }) {
    const [componentStyles, setComponentStyles] = useState(styles.titleBar)

    return (
        <>
            <div className='titlebar' style={componentStyles}>
                <Controls />

                <div className='titlebar_title' style={styles.title}>{title}</div>
            </div>
        </>
    )
}
