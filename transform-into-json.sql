-- generates a JSON lookup map which has unique keys

SELECT json_object_agg(concat(domain, '#', page_key, '#', translation_key), translation) AS translations_object
FROM (
    SELECT 
        jsonb_build_object(
            'translation_key', translation_key,
            'translation_value', translation_value,
            'notes', notes,
            'translation_type', translation_type,
            'page_key', page_key,
            'domain', domain
        ) AS translation,
        domain,
        page_key,
        translation_key
    FROM b2m.translation limit 10
) subquery;
