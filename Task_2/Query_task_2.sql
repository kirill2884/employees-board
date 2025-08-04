
DECLARE @start_sub_id INT;

SELECT @start_sub_id = subdivision_id
FROM collaborators
WHERE id = 710253;

WITH SubdivisionTree AS (
    SELECT
        id AS sub_id,
        name AS sub_name,
        0 AS sub_level
    FROM subdivisions
    WHERE id = @start_sub_id
    UNION ALL
    SELECT
        s.id,
        s.name,
        st.sub_level + 1
    FROM subdivisions s
    INNER JOIN SubdivisionTree st ON s.parent_id = st.sub_id
)

SELECT
    c.id,
    c.name,
    st.sub_name,
    st.sub_id,
    st.sub_level,
    (SELECT COUNT(*) FROM collaborators c2 WHERE c2.subdivision_id = c.subdivision_id) AS colls_count
FROM collaborators c
JOIN SubdivisionTree st ON c.subdivision_id = st.sub_id
WHERE c.age < 40 AND st.sub_id NOT IN (100055, 100059)
ORDER BY st.sub_level ASC;
