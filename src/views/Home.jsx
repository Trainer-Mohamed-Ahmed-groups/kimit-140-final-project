import { useTranslation } from "react-i18next"
export default function Home() {

    let { t } = useTranslation();

    return (
        <div>
            <h1 className="text-center text-primary">{t('home_title')}</h1>
            <p>{t('home_desc')}</p>
        </div>
    )
}